const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        require: true
    },
    name: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended', 'resigned'],
        require: true,
        default: 'active'
    },
    salary: {
        type: Number,
        require: true
    },
    photo: {
        type: String
    },
    password: {
        require: true,
        type: String
    }
})

const Employee = mongoose.model('employee', EmployeeSchema);

async function createEmp(obj) {
    return await new Employee(obj).save();
}

async function updateEmp(id, obj) {
    return await Employee.findByIdAndUpdate(id, obj);
}

async function deleteEmp(id) {
    return await Employee.findByIdAndDelete(id);
}

async function getEmpById(id) {
    return await Employee.findById(id);
}

async function getAllEmps(page, limit) {
    return await Employee.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
}

const EmployeeRepo = {
    createEmp,
    updateEmp,
    deleteEmp,
    getEmpById,
    getAllEmps,
}

module.exports.EmployeeRepo = EmployeeRepo;