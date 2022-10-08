import axios from "./index";

export interface IInvitation {
  readonly name: string;
  readonly status: boolean;
  readonly location: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly slug: string;
  readonly checkInTime: Date;
}

class InvitationApi {
  static async detail (slug: string): Promise<any> {
    let url = `${base}/${slug}/detail`;
    return axios.get(url);
  };
}

let base = "invitations";

export default InvitationApi;
