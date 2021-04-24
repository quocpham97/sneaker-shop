import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

function Category({ categories, onSelectCategory, selectedCategory }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      {categories.map((category) => (
        <Typography
          variant="h5"
          className={`${classes.categoryItem} ${
            selectedCategory[0] === category.slug ? classes.selected : null
          }`}
          key={category.id}
          onClick={() => {
            onSelectCategory(category.slug);
          }}
        >
          {category.name}
        </Typography>
      ))}
    </div>
  );
}

export default Category;
