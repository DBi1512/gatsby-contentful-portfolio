import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      let { file } = node.data.target.fields
      return <img src={file["en-US"].url} />
    }
  }
}

const HomeHeader = () => {
  const data = useStaticQuery(
    graphql`
    {
      contentfulHeader {
        name
        avatar {
          file {
            url
          }
        }
        logo {
          file {
            url
          }
        }
      }
      contentfulHeaderIntroductionRichTextNode {
        json
      }
    }
    `
  )

  const { avatar, name, logo } = data.contentfulHeader
  const { json } = data.contentfulHeaderIntroductionRichTextNode

  return (
    <div>
      <div>
        <img src={avatar.file.url} alt="avatar" />
        <h1>{name}</h1>
        <img src={logo.file.url} alt="logo" />
      </div>

      <div>
        {documentToReactComponents(json, options)}
      </div>
    </div>
  )
}

export default HomeHeader;