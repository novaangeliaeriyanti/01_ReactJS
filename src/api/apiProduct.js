import axios from "axios";
import config from "../config/config";

const listProduct = async()=>{
    try {
        const result = await axios.get(`${config.domainAuth}/product/`)
        return result.data;
    } catch (error) {
        return await error.message
    }
}

export default {listProduct};