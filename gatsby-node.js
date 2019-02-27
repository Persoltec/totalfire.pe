const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
   allCockpitServicios (filter: { lang: { eq: "es" } }) {
     edges {
       node {
         id
         titulo {
           value
         }
       }
     }
   }
   allCockpitPaginas (filter: { lang: { eq: "es" } }) {
     edges {
       node {
         id
         titulo {
           value
         }
         plantilla{
           value
         }
       }
     }
   }

 }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const servicios = result.data.allCockpitServicios.edges;

    servicios.forEach(edge => {
      const id = edge.node.id;
      createPage({
          path: 'servicios/' + slugify(edge.node.titulo.value),
          component: path.resolve(
            `src/templates/default-service.js`
          ),
          // additional data can be passed via context
          context: {
            id
          }
        });

    });

const paginas = result.data.allCockpitPaginas.edges;

    paginas.forEach(edge => {
      const id = edge.node.id;
      let template="default-page";
if (JSON.stringify(edge.node.plantilla) != "null") {
  template =edge.node.plantilla.value;
}
        createPage({
          path:  slugify(edge.node.titulo.value),
          component: path.resolve(
            `src/templates/${ template}.js`
          ),
          // additional data can be passed via context
          context: {
            id
          }
        });

    });



  });
};

function slugify(string) {
  const a = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
  const b = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  let slug;

  if (node.internal.type === `MarkdownRemark`) {
    //const value = createFilePath({ node, getNode })

     const filePath = createFilePath({ node, getNode });
      slug = slugify(filePath);
    //
    // if (~filePath.indexOf("Servicios")) {
    //   slug = `/${slugify(node.frontmatter.title)}`;
    //
    //
    // } else if (~filePath.indexOf("blog")) {
    //   slug = `/blog/${slugify(node.frontmatter.title)}`;
    // } else {
    //   slug = slugify(filePath);
    // }

    createNodeField({
      name: `slug`,
      node,
      value: slug
    });
  }
};
