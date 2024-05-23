using System.Threading.Tasks;
using x10.Models.TokenAuth;
using x10.Web.Controllers;
using Shouldly;
using Xunit;

namespace x10.Web.Tests.Controllers
{
    public class HomeController_Tests: x10WebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}