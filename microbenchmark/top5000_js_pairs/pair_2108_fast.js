const Benchmark = {
    run: function() {
        var VAR_1 =
          "asdfasfdasdfasdFasDfAsdfasdFasDFasDFaSDfASdfasdfasDFASdfsdfasdfsDFaSfasdfasdfasDFasdfASdFASdFsADfAsdsdf";
        var VAR_4 = /[a-z](?=[A-Z])/;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_3 = VAR_1.split(VAR_4);
        }
    }
};