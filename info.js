function load(){
    fetch("info.json")
    .then((res) => res.json())
    .then((data) => {
        let result = '';
        data.forEach(function(info){
          result += `
            <div class="box">
                <div class="box_top">
                    <div class="box_header">
                        <h3>${info.plan_name}</h3>
                    </div>
                    <div class="box_badge">
                        <span>${info.avg}%</span>
                        <span><center>${info.ret}</center></span>
                    </div>
                </div>
                <div class="box_info">
                    <span><img src="${info.gold}"/></span>&nbsp;${info.description}
                </div>
                <div class="btn_sub">
                        <a href="${info.linker}" target="_blank"><button type="button">Invest now</button></a>
                </div>    
                <div class="box_bottom">
                    <h4>Benefits</h4>
                    <p><span><img src="${info.ticks}"/></span>&nbsp;${info.benefits[0]}</p>
                    <p><span><img src="${info.ticks}"/></span>&nbsp;${info.benefits[1]}</p>
                    <p><span><img src="${info.ticks}"/></span>&nbsp;${info.benefits[2]}</p>
                </div>
                <div class="box_bottom_social">
                    <img src="${info.funds}" />
                </div>
            </div>
        `
        });
        document.getElementById("box_infos").innerHTML = result;
    });
}        