import axios from "./index";

export enum WillAttendEnum {
  YES = "yes",
  NO = "no",
  MAYBE = "maybe",
}
class MessageBoxApi {
  static async submitMessageBox({ slug, message, willAttend }: {
    slug: string, message: string, willAttend: WillAttendEnum
  }): Promise<any> {
    let url = `${base}/create`;
    return axios.post(url, { message, slug, willAttend });
  }

  static async isHaveMessageBox(slug: string): Promise<any> {
    let url = `${base}/${slug}/is-have-message`;
    return axios.get(url);
  }
}

let base = "message-box";

export default MessageBoxApi;
