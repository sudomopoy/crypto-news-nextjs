import axios from "axios";
import { baseurl } from '../index';
import { MakeRequest } from '../request';


function getNewsList() {
    return MakeRequest(
        () => axios.get(`${baseurl}/news/list`)
    )
}

export default {
    getNewsList,
}