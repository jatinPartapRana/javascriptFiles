const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 64;
    }
    else{
        throw Error('Amount should be of type number');
    }
};

try {
    convertToRs("dd");
} catch (error) {
    console.log('exceptio occurred');
}

