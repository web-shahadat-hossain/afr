// AboutPageHeader.js component
const PageHeader = ({ title }) => {
  return (
    <div
      className="container-fluid page-header py-5  wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-2 text-dark mb-4 animated slideInDown">
          {title}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item text-dark" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
