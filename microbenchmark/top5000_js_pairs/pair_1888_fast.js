const Benchmark = {
    run: function() {
        var VAR_1 =
            "DROP TABLE IF EXISTS test_table; CREATE TABLE test_table(id INT); INSERT INTO test_table VALUES(10); UPDATE test_table SET id=20 WHERE id=10; SELECT * FROM test_table; DROP TABLE test_table",
          VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = VAR_1.indexOf("UPDATE") !== -1;
        }
    }
};