import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import imgi from "./assets/img/img.jpg";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="space-y-8">
        {/* card div */}
        <div className={`py-2 px-6 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
          <h3 className={`font-bold text-3xl hover:text-blue-600 cursor-pointer my-3 ${theme === "dark" ? "text-white" : "text-[#344955]"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea.
          </h3>
          <p className="my-4 text-[#919ca2]">
            by <span className="text-blue-600 font-bold cursor-pointer">Author</span> | Timestamp
          </p>
          <hr className="my-5" />
          <img src={imgi} alt="title" className="my-5 mx-auto rounded-md w-full" />
          <hr className="my-5" />
          <p className="text-justify text-[#919ca2] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo fuga quis beatae ut illo accusantium esse. Aspernatur dignissimos eius reiciendis. Laboriosam,
            perferendis. Obcaecati dolorum perspiciatis alias laudantium distinctio suscipit aperiam possimus odio, earum aliquam fugit illum saepe cupiditate quae tempore sequi
            facere recusandae doloremque in! Minus fugiat error, corrupti inventore, quam sapiente iure, distinctio quasi tenetur vero aperiam maxime aut at impedit id delectus
            consequuntur repellendus vitae omnis. Laborum provident suscipit alias quibusdam magni mollitia ea sunt dolorem labore? Optio corrupti impedit, vel ullam nam quam
            dolores possimus, eos eaque placeat laborum. Maiores magnam molestiae sequi corporis vero cum alias tempore totam voluptas esse explicabo aut, officiis laboriosam,
            maxime saepe deserunt, quasi nobis nostrum cumque recusandae quisquam dignissimos dolor earum. Accusantium beatae excepturi blanditiis repellat delectus, voluptatem
            architecto minus nulla facere dolore hic aperiam at nihil non recusandae adipisci in aspernatur vel esse assumenda nemo iste. Facilis, labore. Animi!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
