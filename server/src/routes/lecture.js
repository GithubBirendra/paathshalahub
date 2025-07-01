import {Router} from "express"
import Lecture from "../models/lecture.js"

const lectureRouter = Router();

 lectureRouter.get('/lecture', async(req,res)=>{
    try{
        const lectures = await Lecture.find();
        res.json(lectures);
    }catch(error){
        res.status(500).json({error:'Failed to fetch lectures'});

    }
});

lectureRouter.post('/lecture', async(req, res)=>{
    const{title, isFreePreview, hasVideo}=req.body;
    try{
        const newLecture= new Lecture({title, isFreePreview, hasVideo});
        const saved= await newLecture.save();
        res.status(201).json(saved)
    }catch(error){
        res.status(400).json({error:'Failed to add Lecture'});
    }
});

lectureRouter.put('/lecture/:id', async(req, res)=>{
       const{title, isFreePreview, hasVideo}=req.body;
try{
   const updatedLecture= await Lecture.findByIdAndUpdate(
        req.params.id,
        {title, isFreePreview, hasVideo},
        {new: true}
    );
    res.json(updatedLecture)

} catch(error){
    res.status(400).json({error:'Failed to update lecture'});

}
});

lectureRouter.delete('/lecture/:id', async(req,res)=>{
    try{
        await Lecture.findByIdAndDelete(req.params.id);
        res.json({message:'Lecture Deleted'})

    }catch(error){
        res.status(500).json({error:'Failed to delete lecture'})

    }
});

export default lectureRouter;


