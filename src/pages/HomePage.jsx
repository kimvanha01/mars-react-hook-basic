import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import PostList from './components/PostList';
import './HomePage.scss';
// import ColorBox from './components/ColorBox/index';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList/index';

function HomePage() {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
        //...
    })
    useEffect(() => {
        async function fetchTodoList() {
            try {
                // query-string : _limit=10&_page=1
                const paramsString = queryString.stringify(filters);  // bien tu object => string
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);

            } catch (error) {
                console.log(error);
            }

        }
        console.log('POST list')
        fetchTodoList();
    }, [filters]); // [empty] lay du lieu dung 1 lan dau` render
    // 

    useEffect(() => {
        console.log("GET TODO")
    }) // khoong co dependence nen moi lan render lai dc goi 

    // const [todoList, setTodoList] = useState(
    //   [
    //     { id: 1, title: 'I love Easy Frontend! 😍 ' },
    //     { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    //     { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    //   ]
    // );
    // const handleTodoClick = (todo) => {
    //   console.log(todo)

    //   const index = todoList.findIndex(x => x.id === todo.id);

    //   if (index < 0) return

    //   const newTodoList = [...todoList];
    //   newTodoList.splice(index, 1);
    //   setTodoList(newTodoList);
    // }

    // const handleTodoOnSubmit = (formValues) => {
    //   console.log('Form Submit: ', formValues)
    //   const newTodoList = [...todoList];

    //   const newTodo = {
    //     id: todoList.length + 1, // example
    //     ...formValues,
    //   }
    //   newTodoList.push(newTodo);
    //   setTodoList(newTodoList);
    // }
    const handlePageChange = (newPage) => {
        console.log('New Page', newPage);
        setFilters({
            ...filters,
            _page: newPage
        })
    }
    const handleFiltersChange = (newFilters) => {
        console.log('New Filter', newFilters)
        setFilters({
            ...filters,
            _page: 1, // resest ve page 1, do trang cua ta co the co nhieu trnag, nhung cai filter moi doi khi chi co o trang 1
            title_like: newFilters.searchTerm,   // title_like la do backend quy dinh
        })
    }

    const [showClock, setShowClock] = useState(true);

    return (
        <div className="app" >
            <h1>React Hook Basic</h1>
            <MagicBox />
            {/* <ColorBox />
      <TodoForm onSubmit={handleTodoOnSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
            {showClock && <Clock />}

            {/* <button onClick={() => setShowClock(false)}>Hide interval</button> */}
            <button onClick={() => setShowClock(!showClock)}>Show interval</button>
            <PostFilterForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default HomePage