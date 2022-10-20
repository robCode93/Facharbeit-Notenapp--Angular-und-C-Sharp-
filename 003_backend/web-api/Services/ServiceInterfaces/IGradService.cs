using web_api.Models;

namespace web_api.Services.ServiceInterfaces
{
    public interface IGradService
    {
        ResponseModel SaveGrad(Grad gradModel);
        ResponseModel DeleteGrad(Guid gradId);
        List<Grad> GetAllGrads();
        Grad GetGradById(Guid gradId);
    }
}
