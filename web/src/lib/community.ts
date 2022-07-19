import { Community } from "@/project-types/community"
import { CommunityService } from "src/service/community-service"

export async function getAllPathIds() {
  const communities = await CommunityService.fetchCommunties()
  //   const communitiesArray : Community[]= Object.values(communities)
  const len = []
  const communitiesArray = communities.map((m) => {
    len.push(m.id)
  })

  return len.map((m) => ({
    params: { id: m },
  }))
}
