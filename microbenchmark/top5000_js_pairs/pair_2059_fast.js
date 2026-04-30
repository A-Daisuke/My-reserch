const Benchmark = {
    run: function() {
        VAR_1 = "AB12jgGGfWisLWfoi34R32SgD42DSf3453jfh";
        VAR_2 = /^(?=(.*?\d){10})(?=(.*?[A-Z]){12})(?=(.*?[a-z]){10})[a-zA-Z0-9]+$/;
        VAR_3 = /^(?=(.*\d){10})(?=(.*[A-Z]){12})(?=(.*[a-z]){10})[a-zA-Z0-9]+$/;
        VAR_2.test(VAR_1);
    }
};