import CommentCard from "@/components/global/CommentCard"

const CommentSection = () => {
  return (
    <section>
        {[1,2,3,4].map(comment => (
        <CommentCard key={comment+"cmnt"}/>
        ))}
    </section>
  )
}

export default CommentSection