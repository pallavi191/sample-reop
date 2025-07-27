const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: String,
        require: true,
        enum: ['active', 'inactive'],
        default: true
    }
})

const Department = mongoose.model('department', DepartmentSchema);

async function createDept(obj) {
    return await new Department(obj).save();
}

async function updateDept(id, obj) {
    return await Department.findByIdAndUpdate(id, obj, { new : true })
}

async function deleteDept(id) {
    return await Department.findByIdAndDelete(id)
}

async function getDeptById(id) {
    return await Department.findById(id);
}

async function getAllDept() {
    return await Department.find();
}

const DeptRepo = {
    createDept,
    updateDept,
    deleteDept,
    getDeptById,
    getAllDept
};

module.exports.DepartmentRepo = DeptRepo