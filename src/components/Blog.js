import React from 'react'

const Blog = ({projectList, projects}) => {
    return (
        <section className="work" id="work">
        <h2 className="section-title">Blog</h2>
        <div className="blog_container">
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
            {/* ========== Each blog box ========== */}
            <div className="blog">
                <div className="blog_img">
                    <img className='img' src={
                        projects[9].image
                    } alt={projects[9].projectName} />
                </div>
                <div className="work-text">
                    <h2 className="work-h2">{projects[9].projectName}</h2>
                    
                    <p className='work-p blog-p'>This project was done to show my skills in {projects[9].category} level for {projects[9].type}. 
                    <span>{projects[9].details}</span>. You can check is out by clicking 
                     to go to the GitHub reprository or just click the link below to check the deployed 
                     version of the project <a href={projects[9].link}> 
                    <button className="work_category" onClick={() => alert('No article yet')}>
                        Read More
                    </button> 
                     </a>.
                    </p>
                </div>
            </div>
           
            
        </div>
    </section>
    )
}

export default Blog;