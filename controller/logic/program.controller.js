/** Dto */
const programDto = require("../../model/dto/program.dto");
const config = require("config");


exports.createProgram = (req, res, next) => {
    let program = {
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name,
        
    };
    programDto.create(program, (err, data) => {
        
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if(faculty_id){
            let facId = req.body.faculty_id

            return res.status(200).json(
                {
                    faculty_id: facId
                }
            );
        }else{
            return res.status(201).json(
                {
                    info: "The faculty Id doesn't exist."
                }
            );
        }
        
        
    });
};

exports.updateProgram = (req, res, next) => {
    let program = {
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name,
        faculty_id: req.body.faculty_id
    };
    programDto.update({_id: req.body.id}, program, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        
            res.status(201).json(
                {
                    info: data
                }
            );
        
    });

}; 

exports.getAll = (req, res, next) => {
    
    programDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
        
    });
};

exports.getByCode = (req, res, next) => {
    
    programDto.getByCode({code: req.params.code}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
        
    });
};

exports.deleteProgram = () => {
    programDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
        
    });
}