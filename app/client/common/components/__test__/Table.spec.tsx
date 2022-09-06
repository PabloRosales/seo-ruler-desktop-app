import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import { TableRow } from '../TableRow';

describe('Table', () => {
  it('should render empty row', () => {
    const { container } = render(
      <Table rows={[]} renderRow={() => <td></td>} headers={[]} emptyContent={<td>Empty Table...</td>} />,
    );
    expect(screen.getByText('Empty Table...')).toBeInTheDocument();
    expect(container.querySelector('tbody tr:first-child')).toBeInTheDocument();
    expect(container.querySelector('tbody tr:nth-child(2)')).not.toBeInTheDocument();
    expect(container.querySelector('tbody tr td:first-child')).toBeInTheDocument();
    expect(container.querySelector('tbody tr td:nth-child(2)')).not.toBeInTheDocument();
  });

  it('should render headers even if empty', () => {
    const { container } = render(
      <Table
        rows={[]}
        renderRow={() => <div></div>}
        headers={[{ label: 'ID' }, { label: 'Name' }]}
        emptyContent={<td>Empty Table...</td>}
      />,
    );
    expect(container.querySelector('thead tr th:nth-child(1)')).toHaveTextContent('ID');
    expect(container.querySelector('thead tr th:nth-child(2)')).toHaveTextContent('Name');
    expect(screen.getByText('Empty Table...')).toBeInTheDocument();
  });

  it('should render &nbsp; if no label on header', () => {
    const { container } = render(
      <Table
        rows={[]}
        renderRow={() => <div></div>}
        headers={[{ label: '' }]}
        emptyContent={<TableRow colSpan={1}>Empty Table...</TableRow>}
      />,
    );
    expect(container.querySelector('thead tr th:first-child')).toContainHTML('<span>&nbsp;</span>');
    expect(container.querySelector('tbody tr:first-child td')).toHaveAttribute('colspan', '1');
  });

  it('should render rows', () => {
    const { container } = render(
      <Table
        rows={[{ name: 'John Doe' }, { name: 'Jane Doe' }]}
        renderRow={(item) => <TableRow>{item.name}</TableRow>}
        headers={[{ label: 'Name' }]}
        emptyContent={<TableRow colSpan={1}>Empty Table...</TableRow>}
      />,
    );
    expect(container.querySelector('thead tr th:nth-child(1)')).toHaveTextContent('Name');
    expect(container.querySelector('tbody tr:nth-child(1)')).toBeInTheDocument();
    expect(container.querySelector('tbody tr:nth-child(2)')).toBeInTheDocument();
    expect(container.querySelector('tbody tr:nth-child(3)')).not.toBeInTheDocument();
    expect(container.querySelector('tbody tr:nth-child(1) td')).toHaveTextContent('John Doe');
    expect(container.querySelector('tbody tr:nth-child(2) td')).toHaveTextContent('Jane Doe');
    expect(screen.queryByText('Empty Table...')).not.toBeInTheDocument();
  });
});
