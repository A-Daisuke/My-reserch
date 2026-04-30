const Benchmark = {
    run: function() {
        var VAR_1 =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida venenatis sapien id lobortis. Sed in purus vitae enim volutpat.";
        var VAR_2 = 10000;
        var VAR_3 = new Array();
        for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
          VAR_3.push(VAR_1);
        }
        var VAR_5 = VAR_3.join("");
    }
};