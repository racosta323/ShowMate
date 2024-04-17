import Pagination from 'react-bootstrap/Pagination';

function PageNumbers() {

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }


  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {items}
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PageNumbers;