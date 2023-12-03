import {blogJson} from '../json/BlogJson'


export default function Blog() {
  return (
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {blogJson.map((blog, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img
                    className="card-img-top w-100 d-block fit-cover"
                    style={{height: 200}}
                    src={blog.book}
                />
                <div className="card-body p-4">
                  <p className="text-primary card-text mb-0">Article</p>
                  <h4 className="card-title">{blog.title}</h4>
                  <p className="card-text">
                    {blog.summary_content}
                  </p>
                  <div className="d-flex">
                    <img
                        className="rounded-circle flex-shrink-0 me-3 fit-cover"
                        width={50}
                        height={50}
                        src={blog.avatar}
                    />
                    <div>
                      <p className="fw-bold mb-0">{blog.author}</p>
                      <p className="text-muted mb-0">{blog.from}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
  )
}