const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100).join("Thequickbrownfoxjumpsoverthelazydog");
        /(?=[\w\s])(?:\b\S*\s|\s\W*\w)/.test(VAR_1);
    }
};