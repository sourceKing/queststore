import { useState, useEffect } from 'react';
import BaseLayout from 'components/LayoutHOC';

function Store() {
  return (
    <>
      <h1>This is the stores page</h1>
    </>
  )
}

export default BaseLayout(Store);
