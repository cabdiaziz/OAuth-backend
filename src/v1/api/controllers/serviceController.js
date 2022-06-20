const getAllService = (req, res) => {
    res.json({ msg: 'get all service' });
};

const createService = (req, res) => {
    res.json({ msg: 'service create' });
};

const updateService = (req, res) => {
    res.json({ msg: 'update service' });
};

const showStatus = (req, res) => {
    res.json({ msg: 'show service status' });
};

const deleteService = (req, res) => {
    res.json({ msg: 'delete service' });
};

export {
    createService,
    getAllService,
    deleteService,
    updateService,
    showStatus,
};