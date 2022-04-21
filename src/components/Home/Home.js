
import React, {useState, useEffect} from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button  } from '@material-ui/core'
import {getPosts} from '../../actions/posts'
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';
import Pagination from '../Pagination'
import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles()
    const [currentId, setCurrentId] = useState(null); 
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    const searchPost = () => {
        if (search.trim()) {
            
        }
    }
    const handleKeyPress = (e) => {
        if (e.keyCode == 13) {
            
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagDelete) => setTags(tags.filter((tag) => tag != tagDelete ));
    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}
                    className={classes.gridContainer}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <ChipInput
                                style={{margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"

                            />

                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                color="primary"
                            >Search</Button>

                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {/* className={classes.pagination} */}
                        <Paper 
                            elevation={6}
                        >
                            <Pagination/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home