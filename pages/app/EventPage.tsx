import style from "@/styles/Event.module.css";
import Event from "../../components/Card";
import Button from "../../components/Button";
import UseEventPage from "@/Hooks/UseEventPage";

function EventPage() {
  const {
    submitH,
    joiner,
    register,
    data,
    setdata,
    openForm,
    user,
    setuser,
    event,
    setEvent,
    arr1,
    setarr1,
  } = UseEventPage();

  return (
    <div className={`${style.Parent} `}>
      <p>Events</p>
      <Button value="Create Event" Func={openForm} />
      <p style={{ fontSize: 22 }} className="my-5">
        AVAILABLE EVENTS
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {data.map((event: any, i: any) => {
          return (
            <div key={i}>
              <Event
                desc={event.description}
                dt={event.date}
                addr={event.location}
                time={event.time}
                creator={event.creator}
                Func={() => joiner(event)}
                antr={event.antries}
                // value2='Join Event'
              />
            </div>
          );
        })}
      </div>
      <div className={style.CreateE} id="CreateE">
        <form className="w-100">
          <div className="my-4">
            <input
              type="email"
              placeholder="Enter Title Of Event"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              value={event.title}
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Description of Event"
              name="description"
              value={event.description}
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Address Of Event"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="location"
              value={event.location}
              aria-describedby="emailHelp"
              onInput={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Enter Data Of Event"
              name="date"
              type="date"
              className="form-control"
              value={event.date}
              id="exampleInputPassword1"
              onChange={register}
            />
          </div>
          <div className="my-4">
            <input
              placeholder="Enter Time Of Event"
              name="time"
              type="time"
              className="form-control"
              value={event.time}
              id="exampleInputPassword1"
              onChange={register}
            />
          </div>
          <button
            onClick={submitH}
            style={{ fontFamily: "Open Sans" }}
            type="submit"
            className=" btn btn-primary"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventPage;
