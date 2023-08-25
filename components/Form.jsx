import Link from "next/link";

const Form = ({ type, btn, desc, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
        {type}
        </span>
      </h1>
      <p className="desc text-left max-w-md md:ml-4">
           {desc}
      </p>

      <form 
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, 
            prompt: e.target.value})}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
          Field of Prompt{" "}
            <span className="font-normal">(product, marketing, webdevelopment, idea, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, 
            tag: e.target.value})}
            placeholder="Category"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link  href="/" className="text-gray-500 text-sm">
          Back
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-2 text-sm bg-primary-orange text-white border border-primary-orange rounded-full transition ease-in-out duration-300 hover:bg-transparent hover:text-black hover:border-black"
          >
            {submitting ? `${btn}` : btn}

          </button>

        </div>

      </form>
    </section>
  )
}

export default Form