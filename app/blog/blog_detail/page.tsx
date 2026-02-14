import BlogContentWithTOC from './components/BlogContentWithTOC'
import BlogDetailsHero from './components/Hero'
import PopularActivities from './components/PopularActivities'
import PopularPlaces from './components/PopularPlaces'

const BlogDetailPage = () => {
    return (
        <>
            <BlogDetailsHero />
            <PopularActivities />
            <PopularPlaces />
            <BlogContentWithTOC />
        </>
    )
}

export default BlogDetailPage