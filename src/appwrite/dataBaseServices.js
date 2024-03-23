import { useAsyncError } from "react-router-dom";
import conf from "./conf"
import { Client, ID, Databases, Storage } from "appwrite";

export class DatabaseServices{
    client = new Client();
    databases;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);

        this.database = new Databases(this.client);

    }

    async createPost({ Name, Email, Message}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    Name,
                    Email,
                    Message
                }

            )
        } catch (error) {
            console.log("Appwrite serives :: creatPost :: error", error);
        }
    }
}
 const databaseService = new DatabaseServices();
 export default databaseService;
