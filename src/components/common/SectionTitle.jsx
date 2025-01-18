const SectionTitle = ({ title, className }) => {
  return (
    <div className="mb-6">
      <h3 className={`${className} text-xl lg:text-5xl font-medium mb-2`}>
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
