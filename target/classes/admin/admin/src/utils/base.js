const base = {
    get() {
        return {
            url : "http://localhost:8080/volunteer/",
            name: "volunteer",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/volunteer/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园志愿者管理系统"
        } 
    }
}
export default base
