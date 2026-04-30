const Benchmark = {
    run: function() {
        eval(
          "var str = ''; for(var i = 0; i < 999;i++) {str += '0';}console.log(str);",
        );
    }
};