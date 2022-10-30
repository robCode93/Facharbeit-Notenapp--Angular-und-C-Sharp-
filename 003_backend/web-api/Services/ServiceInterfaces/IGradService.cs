using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;

namespace web_api.Services.ServiceInterfaces
{
    public interface IGradService
    {
        List<GradDetails> GetAllGrads();
        GradDetails GetGradById(Guid gradId);

        ResponseModel CreateGrad(CreateGradModel createModel);
        ResponseModel UpdateGrad(Guid gradId, UpdateGradModel updateModel);

        ResponseModel DeleteGrad(Guid gradId);
    }
}
