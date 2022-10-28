const Trial = () => {
  return (
    <section className="container mx-auto p-10 bg-gray-100">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Ready to take a free trial
        </h2>
        <p className="text-xl text-center mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum illo{' '}
          <br />
          natus sapiente animi ad incidunt est ipsum aliquam eaque obcaecati.
        </p>
      </div>

      <form className=" mx-auto gap-5 border p-8 bg-gray-200 flex flex-col">
        <h3 className="text-2xl font-bold mb-4">Let's teach you</h3>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="First name"
            className="px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last name"
            className="px-4 py-2 rounded-md"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-2 rounded-md"
        />
        <button className="bg-blue-500 px-4 py-2 text-white">Submit</button>
      </form>
    </section>
  );
};

export default Trial;
