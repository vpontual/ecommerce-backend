const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = Product.findAll({
      include: [Category, Tag],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = Product.findByPk(req.params.id, {
      include: [Category, Tag],
    });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    const product = Product.create(req.body);

    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      const productTagIds = ProductTag.bulkCreate(productTagIdArr);
      res.status(200).json(productTagIds);
    } else {
      // if no product tags, just respond
      res.status(200).json(product);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update product
router.put("/:id", async (req, res) => {
  try {
    // update product data
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: {
          product_id: req.params.id,
        },
      });

      // create filtered list of new tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      const [destroyedTags, createdTags] = await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);

      res.json({ product, destroyedTags, createdTags });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // delete one product by its `id` value
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
