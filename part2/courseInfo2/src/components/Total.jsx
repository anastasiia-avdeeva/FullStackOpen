export const Total = ({ total }) => (
  <p>
    <b>
      total of {total} {total === 1 ? "exercise" : "exercises"}
    </b>
  </p>
);
