'use client';

import { use } from "react";

export default function UserProfile({
  params,
}: {
  params: Promise<{ profile: string }>;
}){
    const { profile } = use(params); // current user ID, use ID to fetch his journal entries.
      

    return(
        <div>
          
        </div>
    )
}
