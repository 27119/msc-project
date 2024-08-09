import formidable from "formidable";
import fs from "fs";
import slugify from "slugify";
import Research from "../models/research.model.js";
import userModel from "../models/user.model.js";

export const createResearch = async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({ error: "Form data could not be parsed" });
    }


    const title = fields.title?.[0];
    const description = fields.description?.[0];
    const category = fields.category?.[0];
    const userId = fields.userId?.[0];
    const photo = files.photo?.[0];
  
    switch (true) {
      case !title:
        return res.status(500).send({ error: "Title is required" });
      case !description:
        return res.status(500).send({ error: "Description is required" });
      case !category:
        return res.status(500).send({ error: "Category is required" });
      case photo && photo.size > 1000000:
        return res.status(500).send({ error: "Photo should be less than 1MB" });
    }

    if (typeof title !== 'string') {
      return res.status(500).send({ error: "Title must be a string" });
    }

    const newResearch = new Research({
      title,
      description,
      category,
      slug: slugify(title),
      createdBy: userId, 
    });

    if (photo) {
      newResearch.photo.data = fs.readFileSync(photo.filepath);
      newResearch.photo.contentType = photo.mimetype;
    }

    try {
      await newResearch.save();

      res.status(201).send({
        success: true,
        message: "Research article created successfully",
        research: newResearch,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in creating research article",
      });
    }
  });
};


export const getAllResearch = async (req, res) => {
  try {
    const research = await Research.find();
    res.status(200).json(research);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error in fetching research data',
      error
    });
  }
};


export const getContentImage = async (req, res) => {
  try {
    const { id } = req.params;
    const research = await Research.findById(id).select("photo");

    if (!research) {
      return res.status(404).json({ error: "Research element not found" });
    }

    if (!research.photo || !research.photo.data) {
      return res.status(404).json({ error: "Photo not found" });
    }

    res.set("Content-Type", research.photo.contentType); 
    res.send(research.photo.data); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch research image" });
  }
};




export const getTopUsers = async (req, res) => {
  try {
    const users = await userModel.aggregate([
      {
        $lookup: {
          from: "researches",
          localField: "_id",
          foreignField: "createdBy",
          as: "researchArticles",
        },
      },
      {
        $addFields: {
          researchCount: { $size: "$researchArticles" },
        },
      },
      {
        $sort: { researchCount: -1 },
      },
      {
        $limit: 4,
      },
    ]);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};


export const getResearchById = async (req, res) => {
  try {
    const { id } = req.params;
    
   
    const research = await Research.findById(id);
    
    
    if (!research) {
      return res.status(404).json({ error: 'Research not found' });
    }
    

    res.status(200).json(research);
  } catch (error) {
    console.error('Error fetching research by ID:', error);
    res.status(500).json({ error: 'Failed to fetch research' });
  }
};

