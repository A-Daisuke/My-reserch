const Benchmark = {
    run: function() {
        var VAR_1 = 'var str="",i=0;for(;i<1000;i+=1){str+="a";}';
        var VAR_2 = new Function(VAR_1);
        eval(VAR_1);
    }
};