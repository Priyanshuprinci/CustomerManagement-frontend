import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../api';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Pagination from './Pagination';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterField, setFilterField] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const params = {
          page: currentPage,
          limit: 10,
          search: searchTerm,
          filterField,
          filterValue,
        };
        const response = await fetchCustomers(params);
        setCustomers(response.data.customers);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    loadCustomers();
  }, [currentPage, searchTerm, filterField, filterValue]);

  

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filter setFilterField={setFilterField} setFilterValue={setFilterValue} />
      
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>DOB</th>
            <th>Created At</th>
            <th>Modified At</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.s_no}>
              <td>{customer.s_no}</td>
              <td>{customer.name_of_customer}</td>
              <td>{customer.email}</td>
              <td>{customer.mobile_number}</td>
              <td>{new Date(customer.dob).toLocaleDateString()}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{new Date(customer.modified_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default CustomerTable;
