import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';

function getUri(file) {
  const blob = new Blob([file], { type: 'image/jpeg' });
  console.log(URL.createObjectURL(blob));
  return URL.createObjectURL(blob);
}

// creating a request to google API via Edenai, receiving response
export const processPhotoEden = async (photo) => {
  const file = getUri(photo);
  const form = new FormData();
  form.append('providers', 'google');
  form.append('file', photo);
  form.append('language', 'en');
  form.append('fallback_providers', '');

  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/ocr/ocr',
    headers: {
      Authorization: `Bearer ${process.env.VITE_EDEN_AI_API_KEY}`,
      'Content-Type':
        'multipart/form-data;boundary=------WebKitFormBoundaryWH6aJpO3NCrcAVGM',
    },
    data: form,
  };

  const { data } = await axios.request(options).catch((e) => console.error(e));

  return data;
};
