import { Text } from 'react-native';
import React, { Component } from 'react';
import { categories } from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}