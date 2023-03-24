import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs"
import Image from "next/image";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const {post, author} = props;
  return (
    
    <div key={post.id} className="border-b border-slate-400 p-4 gap-3 flex">
      <Image
        className="w-14 h-14 rounded-full"
        src={author.profileImageUrl}
        alt="Profile image"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
         <div className="flex text-slate-300 gap-1">
          <Link href={`/@${author.username}`}> 
            <span>{`@${author.username}`}</span>
          </Link>
          <span className="font-thin"> {` · ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <Link href={`/${post.id}`}>
          <span className="text-2xl">{post.content}</span>
        </Link>
      </div>
    </div>
  );
};