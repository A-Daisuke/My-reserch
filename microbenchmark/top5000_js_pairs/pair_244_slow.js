const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100).join("Thequickbrownfoxjumpsoverthelazydog");
        /(?=.*?\w)(?=.*?\s)/.test(VAR_1);
    }
};