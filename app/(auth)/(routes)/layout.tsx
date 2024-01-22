const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center items-center h-full">
      {children}
    </section>
  );
};

export default AuthLayout;
