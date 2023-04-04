function tt(params) {
    return 'func' in params ? params.func('hello world') : (
        console.log('common error'),
        console.error('not implemnted')
    )
}

tt({ })